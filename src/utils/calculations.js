exports.calculateTotals = (products = []) => {
  const total = products.reduce((acc, product) => acc + product.quantity * product.moq, 0);
  const sgst = total * 0.09; // 9% SGST
  const igst = total * 0.09; // 9% IGST
  const grossTotal = total + sgst + igst;

  return { total, sgst, igst, grossTotal };
};

exports.formatToIndianNumbering = (num) => {
  if(num ) {
    console.warn("Number:", num);
  }
  
  return num;
};

// function to calculate individual product total
exports.calculateProductTotals = (product = {}) => {

  if (!product || typeof product !== "object") {
    console.warn("Invalid product data:", product);
    return { productAmount: 0, gstAmount: 0, total: 0, ...product };
  }

  const quantity = Number(product.quantity) || 0;
  const price = Number(product.price) || 0;
  const gst = Number(product.gst) || 0;

  if (isNaN(quantity) || isNaN(price) || isNaN(gst)) {
    console.warn("Invalid fields in product:", product);
    return { productAmount: 0, gstAmount: 0, total: 0, ...product };
  }

  const productAmount = quantity * price;
  const gstAmount = (productAmount * gst) / 100;
  const total = productAmount + gstAmount;

  return {
    ...product,
    productAmount,
    gstAmount,
    total,
  };
};

exports.isIGSTApplicable = (clientState, companyState) => {
  if (!clientState || !companyState) {
    //console.warn("Invalid State provided:", clientState, companyState);
    return false;
  }
  console.warn("client State code:", exports.getGSTStateCode(clientState));
  console.warn("company State code:", companyState);

  return exports.getGSTStateCode(clientState) !== companyState;
}

// function to calculate quotation totals
exports.calculateQuotationTotals = (products = [], clientGstNumber = "00") => {
  
  if (!Array.isArray(products) || products.length === 0) {
    console.warn("No products available to calculate totals.");
    return { total: 0, sgst: 0, cgst: 0, igst: 0, grandTotal: 0 };
  }

  console.warn("client gst number:", clientGstNumber);

  // check CLIENT GST for IGST
  const isIGST = exports.isIGSTApplicable(clientGstNumber, "Delhi");

  if (!Array.isArray(products) || products.length === 0) {
    console.warn("No products available to calculate totals.");
    return { total: 0, sgst: 0, cgst: 0, igst: 0, grandTotal: 0 };
  }

  console.warn("Calculating Quotation Totals:", products);

  let total = 0;
  let sgst = 0;
  let cgst = 0;
  let igst = 0;

  products.forEach((product) => {

    const productTotal = Number(product.productAmount) || 0;
    const gstAmount = Number(product.gstAmount) || 0;

    if (isNaN(productTotal) || isNaN(gstAmount)) {
      console.warn("Invalid product data:", product);
      return;
    }

    total += productTotal;

    // check isIGST
    if (isIGST) {
      igst += gstAmount;
    } else {
      sgst += gstAmount / 2 || 0;
      cgst += gstAmount / 2 || 0;
    }

  });

  const grandTotal = total + (isIGST ? igst : sgst + cgst);

  console.warn("Final Totals Calculated:", { total, sgst, cgst, igst, grandTotal });

  const amountInWords = exports.convertAmountToWords(grandTotal);

  return { total, sgst, cgst, igst, grandTotal, amountInWords };
};


exports.convertAmountToWords = (amount) => {
  if (typeof amount !== 'number' || isNaN(amount)) {
    console.error("Invalid amount provided:", amount);
    return "Invalid Amount";
  }


  const inWords = (function () {
    const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const thousands = ["", "Thousand", "Lakh", "Crore"];

    function numberToWords(num) {
      if (num === 0) return "Zero";

      let words = "";

      if (num > 9999999) {
        words += numberToWords(Math.floor(num / 10000000)) + " Crore" + (Math.floor(num / 10000000) > 1 ? "s " : " ");
        num %= 10000000;
      }

      if (num > 99999) {
        words += numberToWords(Math.floor(num / 100000)) + " Lakh" + (Math.floor(num / 100000) > 1 ? "s " : " ");
        num %= 100000;
      }

      if (num > 999) {
        words += numberToWords(Math.floor(num / 1000)) + " Thousand" + (Math.floor(num / 1000) > 1 ? "s " : " ");
        num %= 1000;
      }

      if (num > 99) {
        words += numberToWords(Math.floor(num / 100)) + " Hundred" + (Math.floor(num / 100) > 1 ? "s " : " ");
        num %= 100;
      }

      if (num > 10 && num < 20) {
        words += teens[num - 10] + " ";
      } else {
        if (num >= 10) {
          words += tens[Math.floor(num / 10)] + " ";
          num %= 10;
        }
        if (num > 0) {
          words += units[num] + " ";
        }
      }

      return words.trim();
    }

    return numberToWords(amount);
  })();

  console.warn("Amount in Words:", inWords);

  return inWords + " Rupees Only";
};


// GST State code and state name mapping
exports.gstStateMapping = {
  "01": "Jammu & Kashmir",
  "02": "Himachal Pradesh",
  "03": "Punjab",
  "04": "Chandigarh",
  "05": "Uttarakhand",
  "06": "Haryana",
  "07": "Delhi",
  "08": "Rajasthan",
  "09": "Uttar Pradesh",
  "10": "Bihar",
  "11": "Sikkim",
  "12": "Arunachal Pradesh",
  "13": "Nagaland",
  "14": "Manipur",
  "15": "Mizoram",
  "16": "Tripura",
  "17": "Meghalaya",
  "18": "Assam",
  "19": "West Bengal",
  "20": "Jharkhand",
  "21": "Odisha",
  "22": "Chhattisgarh",
  "23": "Madhya Pradesh",
  "24": "Gujarat",
  "25": "Daman & Diu",
  "26": "Dadra & Nagar Haveli",
  "27": "Maharashtra",
  "28": "Andhra Pradesh (Old)",
  "29": "Karnataka",
  "30": "Goa",
  "31": "Lakshadweep",
  "32": "Kerala",
  "33": "Tamil Nadu",
  "34": "Puducherry",
  "35": "Andaman & Nicobar",
  "36": "Telangana",
  "37": "Andhra Pradesh (New)"
};

// Function to get GST State Code from GSTIN
exports.getGSTStateCode = (gstin) => {
  console.warn("Client GST:", gstin);
  if (!gstin || gstin.length < 2) {
      return "Invalid GSTIN";
  }
  console.warn("Client GST valid:", gstin);

  // get state code from first two characters of GSTIN nd check in range of 01 to 37
  // const stateCode = () => {
  //     const code = gstin.slice(0, 2);
  //     console.warn("State Code1:", code);
  //     return parseInt(code) >= 1 && parseInt(code) <= 37 ? code : null;
  // }

  const stateCode = gstin.slice(0, 2); // Extract first 2 digits as state code
  console.warn("Extracted State Code:", stateCode);

  if (!exports.gstStateMapping[stateCode]) {
    console.warn("Unknown State Code:", stateCode);
    return "Unknown State Code";
  }

  const stateName = exports.gstStateMapping[stateCode];
  console.warn("Mapped State Name:", stateName);
  return stateName;

  
};

// function for format date in indian format




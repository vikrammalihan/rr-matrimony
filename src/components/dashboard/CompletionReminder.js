export default function CompletionReminder() {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mt-6 flex justify-between items-center">
            <div>
                <h4 className="text-sm font-semibold">Complete your profile for more responses</h4>
                <p className="text-xs text-gray-500">The first thing that members look for is a photo</p>
            </div>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 text-sm font-semibold rounded-md">
                Add Photo
            </button>
        </div>
    );
}

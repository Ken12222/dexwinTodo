export default function TaskButton({ buttonName, type }) {
    return (
        <button
            type="submit"
            className="w-full p-4 bg-black hover:bg-gray-900 rounded text-white "
        >
            {buttonName}
        </button>
    );
}

import { Link } from "@inertiajs/react";

export default function HeaderBar() {
    return (
        <header className="shadow">
            <Link href="/" className="w-5/6 md:w-4/6 mx-auto flex py-4">
                <p className="text-green-900 text-xl font-bold">dexwin</p>
                <p className="text-black text-xl">Todo</p>
            </Link>
        </header>
    );
}

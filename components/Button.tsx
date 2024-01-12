import Link from "next/link";

function Button({ 
    text,
    to
}: {
    text: string,
    to: string
}) {
    

    return (
        <button className="py-5 px-10 bg-emerald-400 text-white font-bold text-2xl rounded-xl hover:bg-emerald-700">
            <Link href={to}>
                { text }
            </Link>
        </button>
    );
}

export default Button;
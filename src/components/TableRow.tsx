import { FaPen, FaTrashAlt } from "react-icons/fa"

export default function TableRow() {
    return (
        <tr>
            <td className="border-2 border-sl-stroke p-4 text-center">
                <img src="" alt="" />
                <p className="capitalize">Japanees food</p>
            </td>
            <td className="border-2 border-sl-stroke p-4 text-center">33453</td>
            <td className="border-2 border-sl-stroke p-4 text-center">5</td>
            <td className="border-2 border-sl-stroke p-4 text-center">344</td>
            <td className="border-2 border-sl-stroke p-4 text-center">
                <div className="flex items-center justify-center gap-6">
                    <button
                        type="button"
                        className="linkable-button font-semibold flex items-center gap-2 text-green-500"
                    >
                        <FaPen size={18} />
                        edit
                    </button>
                    <button
                        type="button"
                        className="linkable-button font-semibold flex items-center gap-2"
                    >
                        <FaTrashAlt size={18} />
                        delete
                    </button>
                </div>
            </td>
        </tr>
    )
}

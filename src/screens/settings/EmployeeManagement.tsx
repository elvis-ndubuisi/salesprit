import { HiPlus } from "react-icons/hi2"

import Button from "../../components/Button"

export default function EmployeeManagement() {
    return (
        <section className="max-w-xl mx-auto">
            <header className="flex items-center justify-between w-full">
                <h3 className="section-heading">Employees</h3>
                <div className="flex items-center gap-3">
                    <Button
                        isBold={false}
                        handleClick={() => {}}
                        isPrimary={false}
                    >
                        delete
                    </Button>
                    <Button isBold={false} handleClick={() => {}} isPrimary>
                        <HiPlus size={20} /> add employees
                    </Button>
                </div>
            </header>

            {/* <section className="h-[90%] overflow-y-scroll overscroll-contain"></section> */}
        </section>
    )
}

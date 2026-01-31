import type { ReactNode } from "react"

export function AppLayout(props: { sidebar: ReactNode, main: ReactNode }) {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100">
            <div className="grid min-h-screen grid-cols-[280px_1fr]">
                <aside className="border-r border-zinc-800 bg-zinc-950">
                    {props.sidebar}
                </aside>
                <main className="bg-zinc-950">{props.main}</main>
            </div>
        </div>
    )
}

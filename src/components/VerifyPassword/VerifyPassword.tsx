import { Check, Info } from "@phosphor-icons/react/dist/ssr"


export const VerifyPassword = () => {
  return (
    <>
    <div className="grid grid-cols-3 gap-1">
        <div className="w-full h-1 bg-green-500 rounded-full"></div>
        <div className="w-full h-1 bg-green-500 rounded-full"></div>
        <div className="w-full h-1 bg-green-500 rounded-full"></div>
    </div>
    <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
            <Check size={14} />
            <span className="text-xs text-neutral-500">Deve ter pelo menos um número</span>
        </div>
        <div className="flex items-center gap-2">
            <Check size={14} />
            <span className="text-xs text-neutral-500">Deve ter pelo menos uma letra maiúscula e uma minúscula</span>
        </div>
        <div className="flex items-center gap-2">
            <Info size={14} />
            <span className="text-xs text-neutral-500">Deve ter pelo menos um caractere especial</span>
        </div>
    </div>
    </>
    
  )
}

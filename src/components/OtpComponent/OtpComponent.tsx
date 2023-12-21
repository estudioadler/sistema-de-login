import { useState } from "react";


export const OtpComponent = () => {
    const [otp, setOtp] = useState<string[]>(new Array(5).fill(""));
    return (
        <div className="w-full flex justify-between">
            {otp.map((_, index) => (
                <input
                    maxLength={1}
                    className=" w-16 h-16 rounded-lg flex flex-col justify-center items-center text-center gap-2.5 text-4xl border-2 border-gray-200"
                    value={otp[index]}
                    onChange={(e) => {
                        const newOtp = [...otp];
                        newOtp[index] = e.target.value;
                        setOtp(newOtp);
                    }}
                />
            ))}
        </div>
    )
}

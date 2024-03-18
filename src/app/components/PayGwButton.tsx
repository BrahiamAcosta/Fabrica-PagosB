import Image from "next/image";
import wompi from "../util/Wompi_LogoPrincipal.png";
import { payGateways } from "../Enums/Enums";

interface btnProps {
    gateWay: payGateways;
}

export const PayGwButton = (gateway: btnProps) => {
    const getUrl = (gateway: payGateways) => {
        switch (gateway) {
            case payGateways.WOMPI:
                return wompi;
            default:
                throw new Error("Pasarela de pago no válida");
        }
    };
    const url = getUrl(gateway.gateWay);
    console.log(url);

    return (
        <button className="flex justify-center items-center relative overflow-hidden cursor-pointer border-[none]">
            <Image
                src={url}
                width={300}
                height={200}
                alt="Logo de Wompi"
                className="block w-full h-auto transition-[filter] duration-[0.3s] ease-[ease] object-cover"
            />
            <div></div>
        </button>
    );
};
export default PayGwButton;

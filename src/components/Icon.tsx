import { AntDesign } from '@expo/vector-icons';

type TIcon = {
    name: string | any;
    size?: number;
}

export function Icon({name, size = 40} : TIcon) {
    return (
        <AntDesign name={name} size={size} color='black' />
    );
}
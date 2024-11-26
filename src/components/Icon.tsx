import { Feather } from '@expo/vector-icons';
import { colors } from '../themes/theme';

type TIcon = {
    name: string | any;
    color?: string;
    size?: number;
}

export function Icon({name, color = colors.black, size = 40} : TIcon) {
    return (
        <Feather name={name} size={size} color={color} />
    );
}
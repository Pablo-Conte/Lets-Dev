import { ChangeEvent, FormEvent, ReactNode } from "react";
import * as s from "./styled-input-button";

interface InputButtonProps {
    type?: "file" | "submit" | "button";
    name?: string;
    value?: any;
    onChange?: (event: any) => void;
    outLined?: boolean;
    onClick?: (event: FormEvent) => void;
    title?: string
}

const InputButton = ({
    type,
    name,
    value,
    onChange,
    outLined,
    onClick,
    title
}: InputButtonProps) => {
    return (
        <s.InputButton
            className={outLined ? "outlined" : ""}
            type = {type}
            name = {name}
            value = {value}
            onChange = {onChange}
            onClick = {onClick}
            title = {title}
        />
    );
};

export default InputButton;
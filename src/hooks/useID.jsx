import { useId } from "react";

const useID = () => {
    const id = useId();
    console.log(id);
    return id;
};

export { useID };

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ClicheField = () => {
    const [cliche, setCliche] = useState({});

    useEffect(() => {
        setCliche({
            name: "Wizard",
            level: 3,
        });
    }, setCliche);

    return (
        <div>
            <div>{`${cliche.name}(${cliche.level})`}</div>
            <input
                class="hidden"
                type="text"
                value={`${cliche.name}`}
                onChange={(e) => setCliche({ name: e.target.value })}
            />
        </div>
    );
};

export default ClicheField;

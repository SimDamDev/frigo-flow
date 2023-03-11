import React from "react";

const NotYetImplemented = ({ feature }) => {

    let message = `${feature} login n'est pas encore disponible. Nous travaillons dessus!`;

    if (feature === "plus") {
        message =
            "Plus de réseaux pour se connecter seront bientôt disponibles. Nous travaillons dessus!";
    }


    return (
        <div
            style={{
                padding: "10px",
                backgroundColor: "orange",
                color: "white",
            }}
        >
            {message}
        </div>
    );
};

export default NotYetImplemented;

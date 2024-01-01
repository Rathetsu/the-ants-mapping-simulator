import React from "react";

const colorOptions = ["cyan", "green", "blue", "yellow", "purple", "teal"];

const sidebarStyle = {
    width: "200px",
    backgroundColor: "#333",
    color: "#FFF",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
};

const highlightStyle = {
    padding: "10px",
    margin: "5px 0",
    backgroundColor: "#444",
    color: "lime",
    border: "none",
    textAlign: "center",
};

const clickedCellStyle = {
    padding: "10px",
    margin: "5px 0",
    backgroundColor: "#555",
    color: "#FFF",
    border: "none",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.2em",
};

const Sidebar = ({
    setCoordinate,
    coordinate,
    clickedCell,
    goToCell,
    setCellColor,
}) => {
    return (
        <div style={sidebarStyle}>
            <div style={clickedCellStyle}>
                {clickedCell || "X: ... , Y: ..."}
            </div>
            <div>
                <label style={{ margin: "5px 0" }}>X:</label>
                <input
                    type="number"
                    style={highlightStyle}
                    value={coordinate.x}
                    onChange={(e) =>
                        setCoordinate({
                            ...coordinate,
                            x: parseInt(e.target.value),
                        })
                    }
                />
            </div>
            <div>
                <label style={{ margin: "5px 0" }}>Y:</label>
                <input
                    type="number"
                    style={highlightStyle}
                    value={coordinate.y}
                    onChange={(e) =>
                        setCoordinate({
                            ...coordinate,
                            y: parseInt(e.target.value),
                        })
                    }
                />
            </div>
            <div>
                {colorOptions.map((color) => (
                    <button
                        key={color}
                        style={{ ...highlightStyle, backgroundColor: color }}
                        onClick={() => setCellColor(color)}
                    >
                        {color}
                    </button>
                ))}
            </div>
            <button style={highlightStyle} onClick={goToCell}>
                Go to Cell
            </button>
        </div>
    );
};

export default Sidebar;

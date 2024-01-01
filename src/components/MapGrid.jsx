import React, { useState, useRef } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import Sidebar from "./Sidebar";

const containerStyle = {
    display: "flex",
    height: "100vh",
};

const gridContainerStyle = {
    flex: 1,
    backgroundColor: "#333",
    color: "#FFF",
    position: "relative",
};

const cellStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #555",
};

const MapGrid = () => {
    const [selectedCell, setSelectedCell] = useState({ x: -1, y: -1 });
    const [cellColor, setCellColor] = useState("transparent");
    const gridRef = useRef();
    const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
    const [clickedCell, setClickedCell] = useState("");
    const [cellData, setCellData] = useState({});

    const columnCount = 1500;
    const rowCount = 1500;
    const cellSize = 50;

    const scrollToItem = () => {
        gridRef.current.scrollToItem({
            rowIndex: coordinate.y,
            columnIndex: coordinate.x,
            align: "center",
        });
        setSelectedCell({ x: coordinate.x, y: coordinate.y });
    };

    const Cell = ({ columnIndex, rowIndex, style }) => {
        const cellId = `${columnIndex}-${rowIndex}`;
        let cellStyleModified = {
            ...style,
            ...cellStyle,
            backgroundColor: cellColor,
        };

        if (cellData[cellId] && cellData[cellId].color) {
            cellStyleModified.backgroundColor = cellData[cellId].color;
        }

        if (columnIndex === selectedCell.x && rowIndex === selectedCell.y) {
            cellStyleModified = {
                ...cellStyleModified,
                backgroundColor: "red",
            };
        }

        return (
            <div
                style={cellStyleModified}
                onClick={() => {
                    setSelectedCell({ x: columnIndex, y: rowIndex });
                    setClickedCell(`X: ${columnIndex}, Y: ${rowIndex}`);
                    const updatedCellData = {
                        ...cellData,
                        [cellId]: {
                            ...cellData[cellId],
                            color: cellColor,
                        },
                    };
                    setCellData(updatedCellData);
                }}
            />
        );
    };

    return (
        <div style={containerStyle}>
            <Sidebar
                setCoordinate={setCoordinate}
                coordinate={coordinate}
                clickedCell={clickedCell}
                goToCell={scrollToItem}
                setCellColor={setCellColor}
            />
            <div style={gridContainerStyle}>
                <Grid
                    ref={gridRef}
                    columnCount={columnCount}
                    columnWidth={cellSize}
                    height={window.innerHeight}
                    rowCount={rowCount}
                    rowHeight={cellSize}
                    width={window.innerWidth - 200}
                >
                    {Cell}
                </Grid>
            </div>
        </div>
    );
};

export default MapGrid;

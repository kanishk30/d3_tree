import React, { Component } from "react";
import "./App.css";
import Tree from "react-d3-tree";

let commonChild = {
  name: "Son of A and B",
  parent: "Neuro-like networks and Heuristic Programming"
};

const stylenode = {
  shape: "circle",
  shapeProps: {
    r: 10,
    fill: "#F3F3FF",
    stroke: "#2593B8"
  }
};
const styles = {
  nodes: {
    node: {   
      name: {
        fill: "#000",
        strokeWidth: 0,
        textAnchor: 'end', 
      }
    },
    leafNode: {
      name: {
        fill: "#000",
        strokeWidth: 0,
        textAnchor: 'end', 
      }
    }
  },
  links: { 
    fill: "#FFF",
    stroke: "#000",
 }
};
const textLayout = {
    x: '-15',
    y: '0',
};
const translate={
  x:'550',
  y: '250'
};

const myTreeData = [
  {
    name: "Artificial Intelligence",
    children: [
      {
        name: "Engine Intelligence"
      },
      {
        name: "Engine Intelligence",
        parent: "Artificial Intelligence",

        children: [
          {
            name: "Neuro-like networks",
            parent: "Engine Intelligence",
            //children: [commonChild]
          },
          {
            name: "Heuristic Programming",
            parent: "Engine Intelligence",
            //children: [commonChild]
          }
        ]
      }
    ]
  }
];

class App extends React.Component {
  render() {
    return (
      <div
        id="treeWrapper"
        style={{
          width: "1300px",
          height: "3000px",
          background: "#ffffff",
          border: "0px",
          padding: "0px"
        }}
      >
        <Tree data={myTreeData} styles={styles} nodeSvgShape={stylenode} textLayout={textLayout} translate={translate}/>
      </div>
    );
  }
}
export default App;
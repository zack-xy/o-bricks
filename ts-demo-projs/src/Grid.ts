class Grid {
  Width: number = 0;
  Height: number = 0;
  Weight: number = 0;
  Padding: number = 0;
}


class Margin {
  Left: number = 0;
  Top: number = 0;
  Width: number = 10;
  Height: number = 20;
  Weight: string = "1";
  Padding?: number;
}

function ConsolidatedGrid(grid: Grid, margin: Margin): Grid & Margin {
  let consolidateGrid = <Grid & Margin>{...margin}
  consolidateGrid.Width += grid.Width
  consolidateGrid.Height += grid.Height
  consolidateGrid.Left = margin.Left
  consolidateGrid.Top = margin.Top
  consolidateGrid.Padding = margin.Padding ? margin.Padding : grid.Padding
  return consolidateGrid
}

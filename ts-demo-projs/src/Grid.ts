class Grid {
  Width: number = 0;
  Height: number = 0;
  Weight: number = 0;
}


class Margin {
  Left: number = 0;
  Top: number = 0;
  Width: number = 10;
  Height: number = 20;
  Weight: string = "1";
}

function ConsolidatedGrid(grid: Grid, margin: Margin): Grid & Margin {
  let consolidateGrid = <Grid & Margin>{}
  consolidateGrid.Width = grid.Width + margin.Width
  consolidateGrid.Height = grid.Height + margin.Height
  consolidateGrid.Left = margin.Left
  consolidateGrid.Top = margin.Top
  consolidateGrid.Width = grid.Weight + new Number(margin.Weight).valueOf()
  return consolidateGrid
}

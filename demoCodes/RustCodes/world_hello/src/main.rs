mod hello_world;
mod module_demo;

use hello_world::*;
use module_demo::main as module_main;

fn main() {
   greet_world();
   // module的导出的main函数命名重复
   module_main();
}



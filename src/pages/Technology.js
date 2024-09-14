import { SiHtml5, SiCss3, SiJavascript, SiMysql, SiExpress, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaWordpressSimple, FaNode } from "react-icons/fa";
import { useTheme } from '../components/Context';

const List = [
  {
    id: 1,
    Name: 'Html',
    Icon: SiHtml5
  },
  {
    id: 2,
    Name: 'CSS',
    Icon: SiCss3
  },
  {
    id: 3,
    Name: 'Javascript',
    Icon: IoLogoJavascript
  },
  {
    id: 4,
    Name: 'React',
    Icon: FaReact
  },
  {
    id: 5,
    Name: 'MySql',
    Icon: SiMysql
  },
  {
    id: 6,
    Name: 'Wordpress',
    Icon: FaWordpressSimple
  },
  {
    id: 7,
    Name: 'Express js',
    Icon: SiExpress
  },
  {
    id: 8,
    Name: 'Node Js',
    Icon: FaNode
  },
  {
    id: 9,
    Name: 'Monogo DB',
    Icon: SiMongodb
  //
   }
  
  //   id:9,
  //   Name:"Github",
  //   Icon: FaGithub
  // }
];

export default List;

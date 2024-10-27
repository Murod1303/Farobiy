import {
  CodingIcon,
  LogisticIcon,
  MarketingIcon,
  UXICon,
  VideoCreatorIcon,
} from "./icons";

interface Teacher {
  name: string;
  jobName: string;
  picture: string;
  icon: () => JSX.Element;
  id: number;
}

type TeacherArray = Teacher[];

export const teachers: TeacherArray = [
  {
    name: "Alisherova Anvara",
    jobName: "Dasturlash ustozi",
    picture: "/assets/web.png",
    icon: CodingIcon,
    id: 1,
  },
  {
    name: "Antota Nargiza",
    jobName: "UX/UI ustozi",
    picture: "/assets/ux.png",
    icon: UXICon,
    id: 2,
  },
  {
    name: "Jorayev Akbar",
    jobName: "Logistika ustozi",
    picture: "/assets/lo.png",
    icon: LogisticIcon,
    id: 3,
  },
  {
    name: "Mamaraimov Grichka",
    jobName: "Marketing ustozi",
    picture: "/assets/marke.png",
    icon: MarketingIcon,
    id: 4,
  },
  {
    name: "Zokir Malikov",
    jobName: "Videomontaj  ustozi",
    picture: "/assets/video.png",
    icon: VideoCreatorIcon,
    id: 5,
  },
  {
    name: "Anvara Xoliqova",
    jobName: "Dasturlash ustozi",
    picture: "/assets/web.png",
    icon: CodingIcon,
    id: 6,
  },
  {
    name: "Alisherova Nargiza",
    jobName: "Videomontaj  ustozi",
    picture: "/assets/lo.png",
    icon: CodingIcon,
    id: 7,
  },
];

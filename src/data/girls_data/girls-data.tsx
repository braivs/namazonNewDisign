import {GirlData} from "@/common/types"
import React from "react"
import DescriptionComponent from "@/common/DescriptionComponent"

const girls_data_src_2012_2013: Girl_data_src[] = [
  {
    id: 'tais2013',
    img: "/assets/img/team/tais2012-2013.png",
    name: "Tais",
    title: "2013",
  },
  {
    id: 'kara_teller',
    img: "/assets/img/team/kara-teller.png",
    name: "Kara Teller",
    title: "2012",
  },
  {
    id: 'elena_vasileva2013',
    img: "/assets/img/team/elena2012-2013.png",
    name: "Elena Vasilyeva",
    title: "2013",
  },
  {
    id: 'darya_balina',
    img: "/assets/img/team/darya-balina.png",
    name: "Darya Balina",
    title: "2012",
  },
];

const girls_data_src_2010_2011: Girl_data_src[] = [
  {
    id: 'mariya_ryljova',
    img: "/assets/img/team/maria.png",
    name: "Maria Rylyova",
    title: "5\'8\'\' / 130 lb",
  },
  {
    id: 'tais2011',
    img: "/assets/img/team/tais2010-2011.png",
    name: "TAIS",
    title: "5\'7\'\' / 130 lb",
    isInProgress: true,
  },
  {
    id: 'irina',
    img: "/assets/img/team/irina.png",
    name: "IRINA",
    title: "5\'9\'\' / 154 lb",
    isInProgress: true,

  },
  {
    id: 'valentina-perfileva',
    img: "/assets/img/team/valentina.png",
    name: "VALENTINA PERFILYEVA",
    title: "5\'8\'\' / 132 lb",
    isInProgress: true,
  },
  {
    id: 'irina-vlasta',
    img: "/assets/img/team/vlasta.png",
    name: "IRINA (VLASTA)",
    title: "5\'9\'\' / 154 lb",
    isInProgress: true,
  },
  {
    id: 'nadezhda-akhmerova',
    img: "/assets/img/team/nadezhda.png",
    name: "ELENA VASILYEVA",
    title: "5\'6\'\' / 132 lb",
    isInProgress: true,
  },
  {
    id: 'elena-vasileva',
    img: "/assets/img/team/elena2010-2011.png",
    name: "NADEZHDA AKHMEROVA",
    title: "5\'6\'\' / 135 lb",
    isInProgress: true,
  },
  {
    id: 'natalia-mysik',
    img: "/assets/img/team/natalia.png",
    name: "NATALIA MYSIK",
    title: "5\'11\'\' / 154 lb",
    isInProgress: true,
  },
  {
    id: 'kseniya-voloshina',
    img: "/assets/img/team/ksenia.png",
    name: "KSENIA VOLOSHINA",
    title: "5\'3\'\' / 141 lb",
    isInProgress: true,
  },
];

// Add description to girls_data_src
export const girls_data_2012_2013: Array<GirlData> = girls_data_src_2012_2013.map(girl => {
  return {
    ...girl,
    years: '2012 - 2013',
    description: function () {
      return <DescriptionComponent version={'girls'} id={girl.id}/>
    }
  }
})

// Add description to girls_data_src
export const girls_data_2010_2011: Array<GirlData> = girls_data_src_2010_2011.map(girl => {
  return {
    ...girl,
    years: '2010 - 2011',
    description: function () {
      return <DescriptionComponent version={'girls'} id={girl.id}/>
    }
  }
})

export const girls_data_all: Array<GirlData> = girls_data_2010_2011.concat(girls_data_2012_2013)

type Girl_data_src = Omit<GirlData, "description" | 'years'>;

export const girls_data_blank: GirlData = {
  id: '',
  img: '',
  name: '',
  title: '',
  years: '',
  description: () => {
    return <></>
  }
  }


export default girls_data_2010_2011;
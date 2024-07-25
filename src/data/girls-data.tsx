import {GirlData} from "@/common/types"
import React from "react"
import DescriptionComponent from "@/common/DescriptionComponent"

const girls_data_src: Girl_data_src[] = [
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

// Add description to girls_data_src
export const girls_data: Array<GirlData> = girls_data_src.map(girl => {
  return {
    ...girl,
    description: function () {
      return <DescriptionComponent version={'girls'} id={girl.id}/>
    }
  }
})

type Girl_data_src = Omit<GirlData, "description">;

export const girls_data_blank: GirlData = {
  id: '',
  img: '',
  name: '',
  title: '',
  description: () => {
    return <></>
  }
  }


export default girls_data;
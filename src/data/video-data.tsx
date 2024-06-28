import React from "react"
import {DIR_NC46, DIR_NC47} from "@/common/ImageContexts"
import GalleryNext from "@/common/GalleryNext/GalleryNext"

export const video_data: Array<Video_data> = [
  {
    id: 51,
    youtubeID: 'zvHDGMyqyXc',
    color: "",
    img: "/assets/img/video/NC51.jpg",
    category: "Submission wrestling",
    title: "Kara, Darya, Tais. 08.05.2012",
    des: "This is a short video, but the price for the full version is not high. You can enjoy it)",
    description: (
      <p>
        This is a short video, but the price for the full version is not high. You can enjoy it)
        Featured: Tais, Kara Teller, Darya Balina.
      </p>
    )
  },
  {
    id: 48,
    youtubeID: 'fb5NUMSB2qg',
    color: "",
    img: "/assets/img/video/NC48.jpg",
    category: "Submission wrestling",
    title: "Competitions Spring 2017",
    des: "Armwrestling & submission/pin grappling. Girls: Grigorenko Oksana (Tais), Murtazalieva Kurmandi, Piven Alyona.",
    description: (
      <p>
        Women&apos;s strength competition at 16.03.2017. Armwrestling & submission/pin grappling. Girls: Grigorenko
        Oksana
        (Tais), Murtazalieva Kurmandi, Piven Alyona.
      </p>
    )
  },
  {
    id: 47,
    youtubeID: 'fb5NUMSB2qg',
    color: "",
    img: "/assets/img/video/NC47.jpg",
    category: "Submission wrestling",
    title: "Women's strength competition at Maslenitsa 2017",
    des: "Women`s strength competition at Maslenitsa 16.02.2017. Armwrestling & submission grappling.",
    description: (
      <>
        <p>
          Women&lsquo;s strength competition at Maslenitsa 16.02.2017. Armwrestling & submission grappling. Girls:
          Vardugina
          Viktoria, Vasilyeva Elena, Grigorenko Oksana (Tais), Piven Alyona.
          Grigorenko Oksana & Piven Alyona represented Namazon club. Vasilyeva Elena took part only in armwrestling.
        </p>
        <GalleryNext images={DIR_NC47}/>
      </>
    )
  },
  {
    id: 46,
    youtubeID: 'lDgKoh-9KG4',
    color: "",
    img: "/assets/img/video/NC46.jpg",
    category: "Submission wrestling",
    title: "Alena Kurmandi 30.03.2017 - 06.04.2017",
    des: "",
    description: (
      <>
        <GalleryNext images={DIR_NC46}/>
      </>
    )
  }
];
export default video_data;

export type Video_data = {
  id: number
  youtubeID: string
  color: string
  img: string
  category: string
  title: string
  des: string,
  description: React.ReactNode
}

import sC from '@/common/styles.module.scss'
import imgMain from 'public/assets/img/girl/mariya-ryljova/7.jpg'
import Image from "next/image"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR_MARIYA_RYLJOVA} from "@/common/constants/ImageContexts"
import {Table} from "react-bootstrap"
import Link from "next/link"

export const MariyaRyljovaDesc = () => {
  return (
    <>
      <Image className={sC.MainImg} src={imgMain} alt="imgMain"/>
      <p>
        <b>Maria Rylyova</b> (5'8" / 130 lb) is a winner of the championship of the Namazon Club in submission grappling
        in 2010.<br/>
        Maria is a master of sports in the Russian Federation in arm wrestling.
      </p>
      <h4>Submission grappling</h4>
      <ButtonGallery
        images={DIR_MARIYA_RYLJOVA}
        buttonName={'See photos'}
      />
      <h4><u>Results of fights</u></h4>
      <Table bordered>
        <tbody>
        <tr>
          <th>Maria Rylyova vs. Valentina Perfilyeva</th>
          <th>Maria Rylyova vs. Natalia Mysik</th>
        </tr>
        <tr>
          <td><Link href="/video/12">VIDEO 12. Submission grappling. Tournament. April, 2010</Link></td>
          <td><Link href="/video/12">VIDEO 12. Submission grappling. Tournament. April, 2010</Link></td>
        </tr>
        </tbody>
      </Table>
      <Table bordered>
        <tbody>
        <tr>
          <th>Maria Rylyova vs. Tais</th>
          <th>Maria Rylyova vs. Nadezhda Akhmerova</th>
        </tr>
        <tr>
          <td><Link href="/video/1">VIDEO 1. Submission grappling. Tournament. Part 1. June, 2010</Link>
          </td>
          <td><Link href="/video/1">VIDEO 1. Submission grappling. Tournament. Part 1. June, 2010</Link>
          </td>
        </tr>
        <tr>
          <td><Link href="/video/2">VIDEO 2. Submission grappling. Tournament. Part 2. June, 2010</Link>
          </td>
          <td><Link href="/video/2">VIDEO 2. Submission grappling. Tournament. Part 2. June, 2010</Link>
          </td>
        </tr>
        <tr>
          <td><Link href="/video/6">VIDEO 6. Maria Rylyova vs. Tais. March, 2011</Link></td>
        </tr>
        </tbody>
      </Table>
    </>
  )
}

// todo: check links
import {FC} from "react"
import {Tais2013Desc} from "@/data/girls-description/tais2013Desc"
import {KaraTellerDesc} from "@/data/girls-description/kara_tellerDesc"
import {ElenaVasileva2013Desc} from "@/data/girls-description/elena_vasileva2013Desc"
import {DaryaBalinaDesc} from "@/data/girls-description/darya_balinaDesc"
import {MariyaRyljovaDesc} from "@/data/girls-description/mariya_ryljovaDesc"
import {Tais2011Desc} from "@/data/girls-description/tais2011Desc"
import {IrinaDesc} from "@/data/girls-description/irinaDesc"
import {ValentinaPerfilevaDesc} from "@/data/girls-description/valentinaPerfilevaDesc"
import {IrinaVlastaDesc} from "@/data/girls-description/irinaVlastaDesc"
import {NadezhdaAkhmerovaDesc} from "@/data/girls-description/nadezhdaAkhmerovaDesc"
import {ElenaVasilevaDesc} from "@/data/girls-description/elenaVasilevaDesc"
import {NataliaMysikDesc} from "@/data/girls-description/nataliaMysikDesc"
import {KseniyaVoloshinaDesc} from "@/data/girls-description/kseniyaVoloshinaDesc"

export const GIRLS_MAP: Record<string, FC> = {
    'tais2011': Tais2011Desc,
    'irina': IrinaDesc,
    'valentina-perfileva': ValentinaPerfilevaDesc,
    'irina-vlasta': IrinaVlastaDesc,
    'nadezhda-akhmerova': NadezhdaAkhmerovaDesc,
    'elena-vasileva': ElenaVasilevaDesc,
    'natalia-mysik': NataliaMysikDesc,
    'kseniya-voloshina': KseniyaVoloshinaDesc,
    'tais2013': Tais2013Desc,
    'kara_teller': KaraTellerDesc,
    'elena_vasileva2013': ElenaVasileva2013Desc,
    'darya_balina': DaryaBalinaDesc,
    'mariya_ryljova': MariyaRyljovaDesc,
};

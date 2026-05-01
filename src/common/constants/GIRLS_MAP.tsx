import {FC} from "react"
import {tais2013Desc} from "@/data/girls-description/tais2013Desc"
import {kara_tellerDesc} from "@/data/girls-description/kara_tellerDesc"
import {ElenaVasileva2013Desc} from "@/data/girls-description/elena_vasileva2013Desc"
import {DaryaBalinaDesc} from "@/data/girls-description/darya_balinaDesc"
import {MariyaRyljovaDesc} from "@/data/girls-description/mariya_ryljovaDesc"
import {tais2011Desc} from "@/data/girls-description/tais2011Desc"
import {irinaDesc} from "@/data/girls-description/irinaDesc"
import {valentinaPerfilevaDesc} from "@/data/girls-description/valentinaPerfilevaDesc"
import {irinaVlastaDesc} from "@/data/girls-description/irinaVlastaDesc"

export const GIRLS_MAP: Record<string, FC> = {
    'tais2011': tais2011Desc,
    'irina': irinaDesc,
    'valentina-perfileva': valentinaPerfilevaDesc,
    'irina-vlasta': irinaVlastaDesc,
    'tais2013': tais2013Desc,
    'kara_teller': kara_tellerDesc,
    'elena_vasileva2013': ElenaVasileva2013Desc,
    'darya_balina': DaryaBalinaDesc,
    'mariya_ryljova': MariyaRyljovaDesc,
};


import { NC33Desc } from '@/data/data-description/NC33Desc';
import { NC35Desc } from '@/data/data-description/NC35Desc';
import { NC36Desc } from '@/data/data-description/NC36Desc';
import { NC37Desc } from '@/data/data-description/NC37Desc';
import { NC41Desc } from '@/data/data-description/NC41Desc';
import { NC42Desc } from '@/data/data-description/NC42Desc';
import { NC44Desc } from '@/data/data-description/NC44Desc';
import {FC} from "react"

export const descriptionComponents: Record<number, FC> = {
    33: NC33Desc,
    35: NC35Desc,
    36: NC36Desc,
    37: NC37Desc,
    41: NC41Desc,
    42: NC42Desc,
    44: NC44Desc,
    // Add more mappings as needed
};


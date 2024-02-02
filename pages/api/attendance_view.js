import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {
    const pip = await prisma.$queryRaw`SELECT
    Date,
    Month,
    Year,
    Name,
    AM_In,
    AM_Out,
    PM_In,
    PM_Out,
    AM_In_Late,
    AM_Out_Late,
    AM_Out_Under,
    PM_In_Late,
    PM_In_Under,
    PM_Out_Under,

    -- Calculate the total
    TIME_FORMAT(
        SEC_TO_TIME(
            COALESCE(TIME_TO_SEC(AM_In_Late), 0) +
            COALESCE(TIME_TO_SEC(AM_Out_Late), 0) +
            COALESCE(TIME_TO_SEC(AM_Out_Under), 0) +
            COALESCE(TIME_TO_SEC(PM_In_Late), 0) +
            COALESCE(TIME_TO_SEC(PM_In_Under), 0) +
            COALESCE(TIME_TO_SEC(PM_Out_Under), 0)
        ),
        '%H'
    ) AS Hours,
    
    TIME_FORMAT(
        SEC_TO_TIME(
            COALESCE(TIME_TO_SEC(AM_In_Late), 0) +
            COALESCE(TIME_TO_SEC(AM_Out_Late), 0) +
            COALESCE(TIME_TO_SEC(AM_Out_Under), 0) +
            COALESCE(TIME_TO_SEC(PM_In_Late), 0) +
            COALESCE(TIME_TO_SEC(PM_In_Under), 0) +
            COALESCE(TIME_TO_SEC(PM_Out_Under), 0)
        ),
        '%i'
    ) AS Minutes

FROM (
    SELECT
        Date,
        Month,
        Year,
        Name,
        AM_In,
        AM_Out,
        PM_In,
        PM_Out,
        CASE
            WHEN AM_In IS NOT NULL AND TIME_FORMAT(STR_TO_DATE(AM_In, '%h:%i %p'), '%H:%i') > STR_TO_DATE('08:00', '%H:%i') THEN
                TIME_FORMAT(
                    SEC_TO_TIME(
                        TIME_TO_SEC(STR_TO_DATE(AM_In, '%h:%i %p')) - TIME_TO_SEC(STR_TO_DATE('08:00', '%H:%i'))
                    ),
                    '%H:%i'
                )
            ELSE
                NULL
        END AS AM_In_Late,

        CASE
            WHEN AM_Out IS NOT NULL AND TIME_FORMAT(STR_TO_DATE(AM_Out, '%h:%i %p'), '%H:%i') > STR_TO_DATE('12:30', '%H:%i') THEN
                TIME_FORMAT(
                    SEC_TO_TIME(
                        TIME_TO_SEC(STR_TO_DATE(AM_Out, '%h:%i %p')) - TIME_TO_SEC(STR_TO_DATE('12:30', '%H:%i'))
                    ),
                    '%H:%i'
                )
            ELSE
                NULL
        END AS AM_Out_Late,

        CASE
            WHEN AM_Out IS NOT NULL AND TIME_FORMAT(STR_TO_DATE(AM_Out, '%h:%i %p'), '%H:%i') < STR_TO_DATE('12:00', '%H:%i') THEN
                TIME_FORMAT(
                    SEC_TO_TIME(
                        TIME_TO_SEC(STR_TO_DATE('12:00', '%H:%i')) - TIME_TO_SEC(STR_TO_DATE(AM_Out, '%h:%i %p'))
                    ),
                    '%H:%i'
                )
            ELSE
                NULL
        END AS AM_Out_Under,

        CASE
            WHEN PM_In IS NOT NULL AND TIME_FORMAT(STR_TO_DATE(PM_In, '%h:%i %p'), '%H:%i') > STR_TO_DATE('13:00', '%H:%i') THEN
                TIME_FORMAT(
                    SEC_TO_TIME(
                        TIME_TO_SEC(STR_TO_DATE(PM_In, '%h:%i %p')) - TIME_TO_SEC(STR_TO_DATE('13:00', '%H:%i'))
                    ),
                    '%H:%i'
                )
            ELSE
                NULL
        END AS PM_In_Late,

        CASE
            WHEN PM_In IS NOT NULL AND TIME_FORMAT(STR_TO_DATE(PM_In, '%h:%i %p'), '%H:%i') < STR_TO_DATE('12:31', '%H:%i') THEN
                TIME_FORMAT(
                    SEC_TO_TIME(
                        TIME_TO_SEC(STR_TO_DATE('12:31', '%H:%i')) - TIME_TO_SEC(STR_TO_DATE(PM_In, '%h:%i %p'))
                    ),
                    '%H:%i'
                )
            ELSE
                NULL
        END AS PM_In_Under,

        CASE
            WHEN PM_Out IS NOT NULL AND TIME_FORMAT(STR_TO_DATE(PM_Out, '%h:%i %p'), '%H:%i') < STR_TO_DATE('17:00', '%H:%i') THEN
                TIME_FORMAT(
                    SEC_TO_TIME(
                        TIME_TO_SEC(STR_TO_DATE('17:00', '%H:%i')) - TIME_TO_SEC(STR_TO_DATE(PM_Out, '%h:%i %p'))
                    ),
                    '%H:%i'
                )
            ELSE
                NULL
        END AS PM_Out_Under

    FROM (
        -- Your existing query here
        SELECT
            DATE_FORMAT(STR_TO_DATE(Date_Time, '%d/%m/%Y %h:%i:%s %p'), '%Y-%m-%d') AS Date,
            MONTH(STR_TO_DATE(Date_Time, '%d/%m/%Y %h:%i:%s %p')) AS Month,
            YEAR(STR_TO_DATE(Date_Time, '%d/%m/%Y %h:%i:%s %p')) AS Year,
            Name AS Name,
            MIN(CASE WHEN Status = 'C/In' AND TIME_FORMAT(STR_TO_DATE(Date_Time, '%d/%m/%Y %h:%i:%s %p'), '%H:%i') BETWEEN '04:00' AND '09:30' THEN TIME_FORMAT(STR_TO_DATE(Date_Time, '%d/%m/%Y %h:%i:%s %p'), '%h:%i %p') END) AS AM_In,
            MIN(CASE WHEN Status = 'Out Back' AND TIME_FORMAT(STR_TO_DATE(Date_Time, '%d/%m/%Y %h:%i:%s %p'), '%H:%i') BETWEEN '10:00' AND '13:00' THEN TIME_FORMAT(STR_TO_DATE(Date_Time, '%d/%m/%Y %h:%i:%s %p'), '%h:%i %p') END) AS AM_Out,
            MIN(CASE WHEN Status = 'C/In' AND TIME_FORMAT(STR_TO_DATE(Date_Time, '%d/%m/%Y %h:%i:%s %p'), '%H:%i') BETWEEN '11:00' AND '15:00' THEN TIME_FORMAT(STR_TO_DATE(Date_Time, '%d/%m/%Y %h:%i:%s %p'), '%h:%i %p') END) AS PM_In,
            MIN(CASE WHEN Status = 'Out' AND TIME_FORMAT(STR_TO_DATE(Date_Time, '%d/%m/%Y %h:%i:%s %p'), '%H:%i') BETWEEN '14:00' AND '23:00' THEN TIME_FORMAT(STR_TO_DATE(Date_Time, '%d/%m/%Y %h:%i:%s %p'), '%h:%i %p') END) AS PM_Out
        FROM
            attendance
        GROUP BY
            Date, Month, Year, Name
        ORDER BY
            Date, Name
    ) AS Subquery
) AS FinalResult;`;

    res.status(200).json(pip);
};

export default handler;

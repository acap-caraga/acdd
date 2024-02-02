import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {
    const pip = await prisma.$queryRaw`SELECT
        DATE_FORMAT(STR_TO_DATE(Date_Time, '%d/%m/%Y %h:%i:%s %p'), '%Y-%m-%d') AS Date,
        MONTH(STR_TO_DATE(Date_Time, '%d/%m/%Y %h:%i:%s %p')) AS Month,
        YEAR(STR_TO_DATE(Date_Time, '%d/%m/%Y %h:%i:%s %p')) AS Year,
        Name AS Name,
        MIN(CASE WHEN Status = 'C/In' AND TIME_FORMAT(STR_TO_DATE(Date_Time, '%d/%m/%Y %h:%i:%s %p'), '%H:%i') BETWEEN '04:00' AND '10:00' THEN TIME_FORMAT(STR_TO_DATE(Date_Time, '%d/%m/%Y %h:%i:%s %p'), '%h:%i %p') END) AS AM_In,
        MIN(CASE WHEN Status = 'Out Back' AND TIME_FORMAT(STR_TO_DATE(Date_Time, '%d/%m/%Y %h:%i:%s %p'), '%H:%i') BETWEEN '12:00' AND '12:30' THEN TIME_FORMAT(STR_TO_DATE(Date_Time, '%d/%m/%Y %h:%i:%s %p'), '%h:%i %p') END) AS AM_Out,
        MIN(CASE WHEN Status = 'C/In' AND TIME_FORMAT(STR_TO_DATE(Date_Time, '%d/%m/%Y %h:%i:%s %p'), '%H:%i') BETWEEN '12:31' AND '13:00' THEN TIME_FORMAT(STR_TO_DATE(Date_Time, '%d/%m/%Y %h:%i:%s %p'), '%h:%i %p') END) AS PM_In,
        MIN(CASE WHEN Status = 'Out' AND TIME_FORMAT(STR_TO_DATE(Date_Time, '%d/%m/%Y %h:%i:%s %p'), '%H:%i') BETWEEN '17:00' AND '23:00' THEN TIME_FORMAT(STR_TO_DATE(Date_Time, '%d/%m/%Y %h:%i:%s %p'), '%h:%i %p') END) AS PM_Out
    FROM
        attendance
    GROUP BY
        Date, Month, Year, Name
    ORDER BY
        Date, Name;`;

    res.status(200).json(pip);
};

export default handler;

package site.barkalov.dentistApp.service;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.text.pdf.draw.LineSeparator;
import lombok.extern.slf4j.Slf4j;
import site.barkalov.dentistApp.domain.Form43;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

@Slf4j
public class GeneratePdfReport {

    public static ByteArrayInputStream getPdfForm(Form43 form43) {
        Document document = new Document();
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        try {
            PdfWriter.getInstance(document, out);
            document.setPageSize(PageSize.A4.rotate());
            document.setMargins(15,15,10,10);
            document.open();
            PdfPTable table = new PdfPTable(new float[]{5, 1, 4});
            table.setWidthPercentage(100);


            BaseFont bf = BaseFont.createFont("ArialCyr.ttf", BaseFont.IDENTITY_H, true);
            Font font = new Font(bf,14, Font.NORMAL);
            Font fontSmall = new Font(bf,10, Font.NORMAL);
            Font fontSmallBold = new Font(bf, 10, Font.BOLD);
            font.getCalculatedLeading(10);

            Paragraph headerRightText = new Paragraph(15, " ЗАТВЕРДЖЕНО\n"
                    + " Наказ Міністерства охорони здоров’я України \n" +
                    " 14 лютого 2012 року № 110\n\n", font);
            headerRightText.setAlignment(Element.ALIGN_RIGHT);
            document.add(headerRightText);

            LineSeparator separator = new LineSeparator();
            Chunk linebreak = new Chunk(separator);

            Paragraph headerInRow = new Paragraph(10, " Найменування міністерства, іншого органу виконавчої влади, " +
                    "підприємства, установи, організації, до сфери управління якого належить заклад охорони здоров’я",
                    fontSmall);
            Paragraph headerInRow2 = new Paragraph(10, "\n Найменування та місцезнаходження (повна поштова адреса) закладу \n" +
                    " охорони здоров’я, де заповнюється форма",
                    fontSmall);

            Chunk edrpo = new Chunk("29384123", fontSmallBold);
            Paragraph codeEDRPO = new Paragraph(10, "\n\n\nКод за ЄДРПОУ                    ", fontSmall);
            codeEDRPO.add(edrpo);
            codeEDRPO.add("\n\n");

            PdfPCell cellBottomLeftCorner = new PdfPCell();
            cellBottomLeftCorner.addElement(headerInRow);
            cellBottomLeftCorner.addElement(linebreak);
            cellBottomLeftCorner.addElement(headerInRow2);
            cellBottomLeftCorner.addElement(linebreak);
            cellBottomLeftCorner.addElement(codeEDRPO);

            table.addCell(cellBottomLeftCorner);

            table.addCell(new PdfPCell());

            PdfPCell cellBottomRightCorner = new PdfPCell();
            Chunk medicalDocumentationTitle = new Chunk("М Е Д И Ч Н А  Д О К У М Е Н Т А Ц І Я", fontSmallBold);
            Paragraph paragraph = new Paragraph();
            paragraph.add(medicalDocumentationTitle);
            paragraph.setAlignment(Element.ALIGN_CENTER);
            Chunk someText = new Chunk("Форма первинної облікової документації\n", fontSmall);
            Chunk formTitle = new Chunk("№ 043/о\n", fontSmallBold);
            Chunk appliedTitle = new Chunk("З А Т В Е Р Д Ж Е Н О\n", fontSmallBold);
            Chunk lawOfUkraine = new Chunk("Наказ МОЗ  України\n"
            + "___________ № __________\n\n", fontSmall);

            Paragraph paragraph1 = new Paragraph();
            paragraph1.add(someText);
            paragraph1.add(formTitle);
            paragraph1.add(appliedTitle);
            paragraph1.add(lawOfUkraine);
            paragraph1.setAlignment(Element.ALIGN_CENTER);

            cellBottomRightCorner.addElement(paragraph);
            cellBottomRightCorner.addElement(linebreak);
            cellBottomRightCorner.addElement(paragraph1);
            table.addCell(cellBottomRightCorner);

            Paragraph p = new Paragraph(25, "Медична карта стоматологічного хворого № " + form43.getSickNumberId() + "\n"
                    + form43.getYear()  + " рік", font);
            p.setAlignment(Element.ALIGN_CENTER);
            PdfPCell cell1 = new PdfPCell();
            cell1.setColspan(3);
            cell1.addElement(p);
            cell1.setFixedHeight(70);
            table.addCell(cell1);

            Paragraph p2 = new Paragraph(30, " 1. Прізвіще, ім'я, по-батькові:  " +
                    form43.getLastName() + " " + form43.getFirstName() + " " + form43.getPatronymic() + "\n"
                    + " 2. Стать: " + form43.getGender() + "                                 "
                    + " 3. Дата народження: " + form43.getBirthday() + "\n"
                    + " 4. Місце проживання хворого, телефон: " + form43.getAddress() + ", " + form43.getPhone() + "\n\n"
                    , font);
            PdfPCell cell2 = new PdfPCell();
            cell2.setColspan(3);
            cell2.addElement(p2);
            table.addCell(cell2);

            Paragraph p3 = new Paragraph(30, " 5. Діагноз: " + form43.getDiagnosis() + "\n" +
                    " 6. Скарги: " + form43.getComplaints() + "\n"
                    + " 7. Перенесені та супутні захворювання: " + form43.getLastDisease() + "\n"
                    + " 8. Розвиток теперішнього захворювання: " + form43.getPresentDisease() + "\n\n"
                    , font);
            PdfPCell cell3 = new PdfPCell();
            cell3.addElement(p3);
            cell3.setColspan(3);
            table.addCell(cell3);

            document.add(table);
            document.close();
        } catch (DocumentException | IOException e) {
            e.printStackTrace();
        }
        return new ByteArrayInputStream(out.toByteArray());
    }
}

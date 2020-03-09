package site.barkalov.dentistApp.service;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfWriter;
import lombok.extern.slf4j.Slf4j;
import site.barkalov.dentistApp.domain.Form43;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;

@Slf4j
public class GeneratePdfReport {

    public static ByteArrayInputStream getPdfForm(Form43 form43) {
        Document document = new Document();
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        try {
            PdfWriter.getInstance(document, out);
            document.open();
            Font font = FontFactory.getFont(FontFactory.COURIER, 16, BaseColor.BLACK);
            Chunk chunk = new Chunk(form43.getFirstName() + " " + form43.getLastName(), font);
            document.add(chunk);
            document.close();
        } catch (DocumentException e) {
            e.printStackTrace();
        }

        return new ByteArrayInputStream(out.toByteArray());
    }
}

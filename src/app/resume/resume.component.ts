import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // TODO: This is implemented poorly
  public downloadPDF(quality = 1) {
    
    const filename  = 'Resume_EricKeilty';

		html2canvas(document.getElementById('resume'), 
								{scale: quality}
						 ).then(canvas => {
			let pdf = new jsPDF('p', 'mm', 'letter');
			pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
			pdf.save(filename + '.pdf');
		});
    

  }

}

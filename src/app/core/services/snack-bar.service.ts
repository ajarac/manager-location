import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class SnackBarService {
	constructor(private snackBar: MatSnackBar) {}

	error(message: string): void {
		this.snackBar.open(message, 'Done', { duration: 2000 });
	}

	success(): void {
		this.snackBar.open('Operation Success!', 'Done', { duration: 1000 });
	}
}

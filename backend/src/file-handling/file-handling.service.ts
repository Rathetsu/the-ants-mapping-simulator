import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FileHandlingService {
  async saveGridData(gridData: any): Promise<void> {
    const filePath = path.join(__dirname, 'cellData.json');
    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, JSON.stringify(gridData, null, 2), (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }
}

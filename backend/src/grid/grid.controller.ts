import { Controller, Post, Body } from '@nestjs/common';
import { FileHandlingService } from '../file-handling/file-handling.service';

@Controller('grid')
export class GridController {
  constructor(private readonly fileHandlingService: FileHandlingService) {}

  @Post('/save')
  async saveGridData(@Body() gridData: any) {
    await this.fileHandlingService.saveGridData(gridData);
    return { message: 'Data saved successfully' };
  }
}

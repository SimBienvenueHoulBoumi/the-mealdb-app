import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { AuthGuard } from 'src/guard/auth-guard.guard';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'login user' })
  async signIn(@Body() auth: AuthDto) {
    return this.authService.signIn(auth);
  }

  @Post('register')
  @ApiOperation({ summary: 'register user' })
  async register(@Body() auth: AuthDto) {
    return this.authService.register(auth);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get('profile')
  @ApiOperation({ summary: 'get user information' })
  getProfile(@Request() req) {
    return req.user;
  }
}

import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { ClassTransformOptions } from 'class-transformer';
import { ValidatorOptions } from 'class-validator';
export declare class DtoValidationPipe implements PipeTransform {
    private validatorOptions;
    private classTransformOptions;
    static get pipe(): DtoValidationPipe;
    static defaultValidatorOptions: ValidatorOptions;
    static defaultClassTransformOptions: ClassTransformOptions;
    private skipTypes;
    constructor(validatorOptions?: ValidatorOptions, classTransformOptions?: ClassTransformOptions);
    transform(value: any, { metatype }: ArgumentMetadata): Promise<any>;
    private parseErrors;
}

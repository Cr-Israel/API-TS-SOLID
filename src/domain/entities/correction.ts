import { Entity } from '../../core/domain/Entity';

// Agora, eu defino quais as propriedades da minha corretion
type CorrectionProps = {
	grade: number;
	submissionId: string;
	createdAt: Date;
};

export class Correction extends Entity<CorrectionProps> {
	// Crio o constructor privado, aí eu não consigo instanciar essa classe de fora dela.
	private constructor(props: CorrectionProps, id?: string) {
		super(props, id);
	}

	// Eu crio um método público, e ele será usado no lugar do constructor.
	static create(props: CorrectionProps, id?: string) {
		const correction = new Correction(props, id);

		return correction;
	}
}

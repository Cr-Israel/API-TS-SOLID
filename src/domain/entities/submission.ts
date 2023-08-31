import { Entity } from '../../core/domain/Entity';

// Agora, eu defino quais as propriedades da minha corretion
type SubmissionProps = {
	challengeId: string;
	studentId: string;
	createdAt?: Date;
};

export class Submission extends Entity<SubmissionProps> {
	// Crio o constructor privado, aí eu não consigo instanciar essa classe de fora dela.
	private constructor(props: SubmissionProps, id?: string) {
		super(props, id);
	}

	// Eu crio um método público, e ele será usado no lugar do constructor.
	static create(props: SubmissionProps, id?: string) {
		const submission = new Submission({
			...props,
			createdAt: props.createdAt ?? new Date()
		}, id);

		return submission;
	}
}

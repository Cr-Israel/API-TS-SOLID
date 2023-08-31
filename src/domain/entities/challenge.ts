import { Entity } from '../../core/domain/Entity';

// Agora, eu defino quais as propriedades da minha corretion
type ChallengeProps = {
	title: string;
	instructionUrl: string;
};

export class Challenge extends Entity<ChallengeProps> {
	// Crio o constructor privado, aí eu não consigo instanciar essa classe de fora dela.
	private constructor(props: ChallengeProps, id?: string) {
		super(props, id);
	}

	// Eu crio um método público, e ele será usado no lugar do constructor.
	static create(props: ChallengeProps, id?: string) {
		const challenge = new Challenge(props, id);

		return challenge;
	}
}

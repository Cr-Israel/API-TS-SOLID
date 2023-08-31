import { Entity } from '../../core/domain/Entity';

// Agora, eu defino quais as propriedades da minha corretion
type StudentProps = {
	name: string;
	email: string;
};

export class Student extends Entity<StudentProps> {
	// Crio o constructor privado, aí eu não consigo instanciar essa classe de fora dela.
	private constructor(props: StudentProps, id?: string) {
		super(props, id);
	}

	// Eu crio um método público, e ele será usado no lugar do constructor.
	static create(props: StudentProps, id?: string) {
		const student = new Student(props, id);

		return student;
	}
}

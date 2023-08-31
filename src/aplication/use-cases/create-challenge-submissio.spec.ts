import { describe, expect, it } from "vitest";
import { CreateChallengeSubmission } from "./create-challenge-submission";
import { InMemoryStundentsRepository } from '../../../tests/repositories/in-memory-students-repository'
import { InMemoryChallengesRepository } from '../../../tests/repositories/in-memory-challenges-repository'
import { Student } from "../../domain/entities/student";
import { Challenge } from "../../domain/entities/challenge";

// sut => system under test

describe('Create challenge submission use case', () => {
    it('should be able to create a new challenge submission', async () => {
        const studentsRepository = new InMemoryStundentsRepository();
        const challengesRepository = new InMemoryChallengesRepository();

        const student = Student.create({
            name: 'Israel',
            email: 'israel@teste.com'
        })

        const challenge = Challenge.create({
            title: 'Challenge 01',
            instructionUrl: 'http://exemplo.com'
        })

        studentsRepository.items.push(student);
        challengesRepository.items.push(challenge);

        const sut = new CreateChallengeSubmission(
            studentsRepository,
            challengesRepository
        );

        const response = await sut.execute({
            studentId: student.id,
            challengeId: challenge.id
        })

        expect(response).toBeTruthy()
    })
})
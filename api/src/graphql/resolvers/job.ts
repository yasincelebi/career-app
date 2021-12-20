import { Job } from '@prisma/client';
import JobService from '../../services/jobService';

const jobService = new JobService();
const jobResolver = {
  Query: {
    allJobs: () => jobService.listAll(),
    findOneJob: (_: any, { where, value }: { where: string; value: string }) =>
      jobService.find({ where, value }),
  },
  Mutation: {
    updateJob: (_: any, { where, value, data }: { where: string; value: any; data: Job }) =>
      jobService.update({ where, value, data }),
    createJob: (_: any, { data }: { data: any }) => jobService.create({ value: data }),
    deleteJob: (_: any, { where, value }: { where: string; value: string }) =>
      jobService.delete({ where, value }),
  },
};

export default jobResolver;

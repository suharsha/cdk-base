import * as cdk from 'aws-cdk-lib';
import { NetworkStack } from '../lib/network';
import { DatabaseStack } from '../lib/database';
import { ServiceStack } from '../lib/service';

const app = new cdk.App();

new NetworkStack(app, 'NetworkStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});

const databaseStack = new DatabaseStack(app, 'DatabaseStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
})

new ServiceStack(app, 'ServiceStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
  studentDdbTable: databaseStack.studentTable
})
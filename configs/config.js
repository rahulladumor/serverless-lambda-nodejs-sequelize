const rabbitConfig = {
  vhosts: {
    '/': {
      connection: {
        url: `amqps://xyvfvfzw:9ojRvTuP_CJww4iszCLd5Wqh-3QSbuw7@owl.rmq.cloudamqp.com/xyvfvfzw`,
      },
      exchanges: [
        'auditlog_ex',
      ],
      queues: [
        'auditlog_q',
      ],
      bindings: [
        'auditlog_ex[a.b.c] -> auditlog_q',
      ],
      publications: {
        auditlog_pub: {
          exchange: 'auditlog_ex',
          routingKey: 'a.b.c',
        },
      },
      subscriptions: {
        auditlog_sub: {
          queue: 'auditlog_q',
          prefetch: 3,
        },
      },
    },
  },
};

const logGroupName = 'blogApisGroup';

const serverRegion = 'us-east-1';

const awsAccessKeyId = 'AKIATVU3J4PE7XKB43VM'
const awsSecretKey = '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';

module.exports = {rabbitConfig, logGroupName, serverRegion, awsAccessKeyId, awsSecretKey};
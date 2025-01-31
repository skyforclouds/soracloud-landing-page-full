import { motion } from "framer-motion";

const CodeExample = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple to Integrate</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get started with just a few lines of code. No complex configuration
            needed.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-lg p-8 overflow-x-auto"
        >
          <pre className="text-gray-100 font-mono text-sm">
            <code>{`import { GPUCluster } from '@gpu-orchestrator/core'

// Initialize your cluster
const cluster = new GPUCluster({
  region: 'us-west-2',
  instanceType: 'gpu.large'
})

// Deploy your workload
await cluster.deploy({
  model: './models/stable-diffusion',
  scaling: {
    minInstances: 1,
    maxInstances: 10,
    targetUtilization: 0.8
  }
})`}</code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeExample;
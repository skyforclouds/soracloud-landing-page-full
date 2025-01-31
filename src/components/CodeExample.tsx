import { motion } from "framer-motion";

const CodeExample = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Code-First Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Write Python code that runs on GPUs, just like you'd write any other code.
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
            <code>{`from gpu_orchard import Cluster

def train_model():
    # Your ML training code here
    pass

# Initialize cluster with auto-scaling
cluster = Cluster(
    name="training-cluster",
    gpu_type="a100",
    min_instances=1,
    max_instances=10
)

# Deploy your training job
job = cluster.run(
    train_model,
    requirements=["torch", "transformers"],
    env={"WANDB_API_KEY": "your-key"}
)

# Monitor progress in real-time
job.stream_logs()
`}</code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeExample;
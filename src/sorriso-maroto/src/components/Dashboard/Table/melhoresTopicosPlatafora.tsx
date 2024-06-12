import React from 'react';

interface TopicData {
  value: string;
  video_count: number;
  avg_views: number;
  sum_views: number;
  avg_comments: number;
  sum_comments: number;
  avg_ratings: number;
  sum_ratings: number;
}

interface TopicsTableProps {
  topics: TopicData[];
}

export const TopicsTable2: React.FC<TopicsTableProps> = ({ topics }) => {
  // Ordena os tópicos pela soma total de visualizações
  const sortedTopics = topics.sort((a, b) => b.sum_views - a.sum_views);

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tópicos</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visualizações Totais</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {sortedTopics.map((data, index) => (
          <tr key={index} className={index === 0 ? 'text-green-500 font-bold text-lg' : (index % 2 === 0 ? 'bg-gray-50' : 'bg-white')}>
            <td className="px-6 py-4 whitespace-nowrap">{data.value}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data.sum_views}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TopicsTable2;
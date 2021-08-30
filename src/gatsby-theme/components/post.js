import React, { useCallback, useRef } from 'react';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus';
import BasePost from 'gatsby-theme/src/components/post';
import useSiteMetadata from 'gatsby-theme/src/hooks/use-site-metadata';

const isDev = /localhost/.test(global.location?.origin);

export default function Post({ post, ...props }) {
	const { siteUrl } = useSiteMetadata();
	const { current: disqusConfig } = useRef({
		url: `${siteUrl}${post.slug}`,
		identifier: post.slug,
		title: post.title,
	});

	const renderComment = useCallback(
		() =>
			isDev ? null : (
				<>
					{` — `}
					<CommentCount config={disqusConfig} placeholder={'Comments'} />
				</>
			),
		[disqusConfig],
	);

	return (
		<BasePost {...props} post={props} renderCommentCount={renderComment}>
			{!isDev && <Disqus config={disqusConfig} />}
		</BasePost>
	);
}
